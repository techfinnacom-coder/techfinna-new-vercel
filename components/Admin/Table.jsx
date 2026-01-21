"use client";

import { useDebounce } from "@/hooks/useDebounce";
import { useEffect, useState } from "react";

const SalesTable = () => {
  const [sales, setSales] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const debouncedQuery = useDebounce(searchInput, 500);
  const [status, setStatus] = useState("all");
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [total, setTotal] = useState(0);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(false);


  useEffect(() => {
    const fetchData = async () => {
       setLoading(true); 
      try {
        const params = new URLSearchParams({
          query:debouncedQuery,
          status,
          page: page.toString(),
          pageSize: pageSize.toString()
        });
        const response = await fetch(
          `https://us-central1-finna-coming-soon.cloudfunctions.net/getSalesTableData?${params}`
        );
        const { data, total, totalPages } = await response.json();
        setSales(data || []);
        setTotal(total || 0);
        setTotalPages(totalPages || 1);
      } catch (error) {
        console.error('Error fetching sales table data:', error);
      }
       finally {
        setLoading(false); 
      }
    };
    fetchData();
  }, [debouncedQuery, status, page, pageSize]);

  useEffect(() => {
    setPage(1); 
  }, [debouncedQuery, status, pageSize]);

  function capitalizeFirstLetter(str) {
    if (str.length === 0) {
      return "";
    }
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  const start = (page - 1) * pageSize + 1;
  const end = Math.min(page * pageSize, total);

  return (
    <div className="w-[90%] md:w-[80%] mx-auto py-10">
      <h2 className="text-2xl font-bold mb-4 text-black">Sales Records</h2>

      <div className="mb-4 flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
        <div className="flex flex-1 items-center gap-3">
          <div className="flex-1">
            <label htmlFor="search" className="sr-only">
              Search
            </label>
            <input
              id="search"
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
              placeholder="Search name, email, product, status"
              className="w-full rounded-md border border-border bg-white text-black px-3 py-2 text-sm outline-none ring-0 focus:border-ring"
            />
          </div>
          <div>
            <label htmlFor="status" className="sr-only">
              Status
            </label>
            <select
              id="status"
              value={status}
              onChange={(e) => setStatus(e.target.value)}
              className="rounded-md border border-border bg-background px-3 py-2 text-sm text-black"
            >
              <option value="all">All status</option>
              <option value="succeeded">Succeeded</option>
              <option value="processing">Processing</option>
            </select>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <div>
            <label htmlFor="pageSize" className="sr-only text-black">
              Rows per page
            </label>
            <select
              id="pageSize"
              value={pageSize}
              onChange={(e) => setPageSize(Number(e.target.value))}
              className="rounded-md border border-border bg-background px-3 py-2 text-sm text-black"
            >
              <option value={5}>5 / page</option>
              <option value={10}>10 / page</option>
              <option value={20}>20 / page</option>
              <option value={50}>50 / page</option>
            </select>
          </div>
          <div className="text-sm text-black/60">
            {total > 0 ? `Showing ${start}-${end} of ${total}` : "No results"}
          </div>
        </div>
      </div>

      <div className="overflow-x-auto rounded-lg border border-border">
        {loading ? (
          <div className="flex justify-center items-center p-6">
            <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-black"></div>
          </div>
        ) : (
        <table className="w-full border-collapse bg-background">
          <thead className="bg-black text-white">
            <tr>
              <th className="p-2 text-center text-xs font-semibold uppercase tracking-wide">Sr. No</th>
              <th className="p-2 text-center text-xs font-semibold uppercase tracking-wide">User Name</th>
              <th className="p-2 text-center text-xs font-semibold uppercase tracking-wide">Email</th>
              <th className="p-2 text-center text-xs font-semibold uppercase tracking-wide">Product</th>
              <th className="p-2 text-center text-xs font-semibold uppercase tracking-wide">Payment Status</th>
              <th className="p-2 text-center text-xs font-semibold uppercase tracking-wide">Amount</th>
              <th className="p-2 text-center text-xs font-semibold uppercase tracking-wide">Date</th>
            </tr>
          </thead>
          <tbody>
            {sales.map((sale, ind) => (
              <tr
                key={sale.id ?? `${start + ind}`}
                className="border-b border-border hover:bg-muted/50 transition-colors text-black/60"
              >
                <td className="text-center p-2">{start + ind}</td>
                <td className="text-center p-2">{sale.customerName}</td>
                <td className="text-center p-2">{sale.customerEmail}</td>
                <td className="text-center p-2">{sale.productName}</td>
                <td className="text-center p-2">{capitalizeFirstLetter(sale.status)}</td>
                <td className="text-center p-2">
                  ${typeof sale.amount === "number" ? sale.amount.toFixed(2) : sale.amount}
                </td>
                <td className="text-center p-2">{sale.created}</td>
              </tr>
            ))}
            {sales.length === 0 && (
              <tr>
                <td className="p-6 text-center text-sm text-muted-foreground" colSpan={7}>
                  No sales match your filters.
                </td>
              </tr>
            )}
          </tbody>
        </table>
          )}
      </div>

      <div className="mt-4 flex items-center justify-between gap-3">
        <button
          type="button"
          onClick={() => setPage((p) => Math.max(1, p - 1))}
          disabled={page <= 1}
          className="rounded-md border border-border bg-black text-white px-3 py-2 text-sm disabled:opacity-50"
          aria-label="Previous page"
        >
          Previous
        </button>
        <div className="text-sm text-black/60">
          Page {page} of {totalPages}
        </div>
        <button
          type="button"
          onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
          disabled={page >= totalPages}
          className="rounded-md border border-border bg-black text-white px-3 py-2 text-sm disabled:opacity-50"
          aria-label="Next page"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default SalesTable;