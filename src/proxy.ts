// Try
// curl 1481709001308635156.discordsays.com/80
// curl 1481709001308635156.discordsays.com     ## This is just /120
// curl 1481709001308635156.discordsays.com/200

import { NextRequest, NextResponse } from 'next/server';
import path from 'path';
import fs from "fs";

export function proxy(request: NextRequest) {
  const ua = request.headers.get('user-agent') || '';

  if (!ua || ua.toLowerCase().includes('curl')) {
    try {
      let r = request.url.split("/");

      if (r[4]) {
        console.error("Too many args!");
        return;
      }

      let ansiPath;

      switch(r[3]) {
        case "80":
          ansiPath = path.join(process.cwd(), 'public', 'astolfo-80.ans');
           break;
           
        case "200":
           ansiPath = path.join(process.cwd(), 'public', 'astolfo-200.ans');
           break;

        default:
           ansiPath = path.join(process.cwd(), 'public', 'astolfo-120.ans');
           break;
      }

      const ansiContent = fs.readFileSync(ansiPath, 'utf8');
      return new NextResponse(ansiContent, {
        headers: { 
          'Content-Type': 'text/plain; charset=utf-8',
          'Content-Disposition': 'inline',
          'Cache-Control': 'public, max-age=3600'
        }
      });
    } catch (e) {
      return new NextResponse('ASCII art file not found!\n', { status: 404 });
    }
  }
  return NextResponse.next();
}

export const config = {
  matcher: [ '/((?!api|_next/static|_next/image|favicon.ico).*)' ],
};
