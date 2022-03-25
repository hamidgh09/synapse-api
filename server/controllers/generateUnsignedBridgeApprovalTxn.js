import { Bridges } from "../utils/bridges.js";
import * as ChainUtils from "../utils/chainUtils.js";
import * as TokenUtils from "../utils/tokenUtils.js";

/**
 * @param {String} fromChain
 * @param {String} fromToken
 * @returns {Object[]}
 */
async function generateUnsignedBridgeApprovalTxn(fromChain, fromToken) {
    const fromChainId = ChainUtils.getIdFromRequestQueryParam(fromChain)

    const fromTokenSymbol = TokenUtils.getSymbolFromRequestQueryParam(fromToken)
    const fromTokenObj = TokenUtils.getObjectFromSymbol(fromTokenSymbol);

    const bridge = Bridges[fromChainId];

    try {
        const txn = await bridge.buildApproveTransaction({
            token: fromTokenSymbol,
        });
        return {
            unsigned_data: txn.data,
            to: txn.to,
            maxPriorityFeePerGas: txn.maxPriorityFeePerGas
        }
    } catch (err) {
        throw err
    }
}

export { generateUnsignedBridgeApprovalTxn };
