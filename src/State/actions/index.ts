import { ActionTypes } from "../action-types"

interface DepositAction {
  type: ActionTypes.DEPOSIT
  payload: number
}

interface WithDrawAction {
  type: ActionTypes.WITHDRAW
  payload: number
}

interface BankruptAction {
  type: ActionTypes.BANKRUPT
}

export type Action = DepositAction | WithDrawAction | BankruptAction
