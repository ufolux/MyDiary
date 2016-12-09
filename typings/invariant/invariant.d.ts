/**
 * Created by Bruno Grieder
 */

declare module Invariant {
    export function invariant(someVal: boolean, throwMessage: string): void
}


declare module "invariant" {
    export default Invariant.invariant
}