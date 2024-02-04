import React from "react";
import { Disposable, UseMutationConfig } from "react-relay";
import { MutationParameters } from "relay-runtime";

export type ValueOf<T> = T[keyof T];

/**
 * @description Create a type from a Relay mutation
 * @example type UserContextTypes = {
 *   createUser: MutationTypeOf<createUserMutation>
 * }
 */
export type MutationTypeOf<T extends MutationParameters> = (
  config: UseMutationConfig<T>
) => Disposable;
