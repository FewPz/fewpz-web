/**
 * This file was generated by kysely-codegen.
 * Please do not edit it manually.
 */

import type { ColumnType } from "kysely";

export type Generated<T> = T extends ColumnType<infer S, infer I, infer U>
  ? ColumnType<S, I | undefined, U>
  : ColumnType<T, T | undefined, T>;

export interface Shortlink {
  hypertext_reference_link: string;
  id: Generated<number>;
  note: string | null;
  slug_name: string;
}

export interface DB {
  shortlink: Shortlink;
}
