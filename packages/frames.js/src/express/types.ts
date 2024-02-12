import { FrameState } from "../common/server";
import { Request } from "express";

export interface ParsedFrameParams {
  postBody: FrameState | null;
  prevState: FrameState | null;
  pathname?: string;
  prevRedirects: Record<string, any> | null;
}

export interface ExpressFramePageProps {
  req: Request;
}