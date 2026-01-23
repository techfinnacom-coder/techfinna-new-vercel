import { NextResponse, NextRequest } from "next/server";
import axios from "axios";
import AdmZip from "adm-zip";
import { Dropbox, DropboxResponse } from "dropbox";

export async function GET(req: NextRequest, res: NextResponse) {
  console.log("local api working");

  try {
    const date1 = Date.now();
    const date2 = 1923087683453;

    // Calculate the difference in milliseconds
    const differenceMs = Math.abs(date1 - date2);

    // Convert milliseconds to days, hours, minutes, and seconds
    const millisecondsInOneSecond = 1000;
    const millisecondsInOneMinute = millisecondsInOneSecond * 60;
    const millisecondsInOneHour = millisecondsInOneMinute * 60;
    const millisecondsInOneDay = millisecondsInOneHour * 24;

    const days = Math.floor(differenceMs / millisecondsInOneDay);
    const hours = Math.floor(
      (differenceMs % millisecondsInOneDay) / millisecondsInOneHour
    );
    const minutes = Math.floor(
      (differenceMs % millisecondsInOneHour) / millisecondsInOneMinute
    );
    const seconds = Math.floor(
      (differenceMs % millisecondsInOneMinute) / millisecondsInOneSecond
    );

    // Log the difference to the console
    console.log(
      `Difference: ${date1} ${date2} ${days} days, ${hours} hours, ${minutes} minutes, ${seconds} seconds`
    );

    return NextResponse.json({
      msg: `Difference:${date1} ${date2}  ${days} days, ${hours} hours, ${minutes} minutes, ${seconds} seconds`,
    });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ msg: error });
  }
}
