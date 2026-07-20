import type { Board } from "../store/types";

const BOARD_SYLLABUS_LABELS: Record<string, string> = {
  tnsb: "Samacheer Kalvi",
  cbse: "CBSE",
  icse: "ICSE",
};

export const getBoardSyllabusName = (board: Board | null | undefined): string => {
  if (!board) return "board";
  return BOARD_SYLLABUS_LABELS[board.id?.toLowerCase()] || board.title || "board";
};

export const getBoardSyllabusPhrase = (board: Board | null | undefined): string => {
  const syllabusName = getBoardSyllabusName(board);
  if (board?.id?.toLowerCase() === "tnsb") {
    return `${syllabusName} syllabus`;
  }
  if (board?.id?.toLowerCase() === "cbse") {
    return `${syllabusName} board syllabus`;
  }
  if (board?.id?.toLowerCase() === "icse") {
    return `${syllabusName} board syllabus`;
  }
  return `${board?.title || "Board"} syllabus`;
};
