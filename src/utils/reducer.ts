import { AnyAction } from "@reduxjs/toolkit";

/** START ** leveraging type predicate function to create a type gard for our actions */
type Machable<AC extends () => AnyAction> = AC & {
  type: ReturnType<AC>["type"]; // getting the return type of that actionCreator which we are gonna pass it as a parameter
  match(action: AnyAction): action is ReturnType<AC>; // getting the actual type from enum
};

export function withMacher<AC extends () => AnyAction & { type: string }>(
  actionCreator: AC
): Machable<AC>;

export function withMacher<
  AC extends (...orgs: any[]) => AnyAction & { type: string }
>(actionCreator: AC): Machable<AC>;

export function withMacher(actionCreator: Function) {
  const type = actionCreator().type;
  return Object.assign(actionCreator, {
    type,
    mach(action: AnyAction) {
      return action.type === type;
    },
  });
}
/** END ** leveraging type predicate function to create a type gard for our actions */

export type ActionWithPayload<T, P> = {
  type: T;
  payload: P;
};

export type ActionWithoutPayload<T> = {
  type: T;
};

export function createAction<T extends string, P>(
  type: T,
  payload: P
): ActionWithPayload<T, P>;

export function createAction<T extends string>(
  type: T,
  payload: void
): ActionWithoutPayload<T>;

export function createAction<T extends string, P>(type: T, payload: P) {
  return {
    type,
    payload,
  };
}
