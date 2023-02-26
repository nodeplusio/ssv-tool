const abi = [{ 'inputs': [], 'name': 'AccountAlreadyEnabled', 'type': 'error' }, {
  'inputs': [],
  'name': 'ApprovalNotWithinTimeframe',
  'type': 'error'
}, { 'inputs': [], 'name': 'BelowMinimumBlockPeriod', 'type': 'error' }, {
  'inputs': [],
  'name': 'BurnRatePositive',
  'type': 'error'
}, { 'inputs': [], 'name': 'CallerNotOperatorOwner', 'type': 'error' }, {
  'inputs': [],
  'name': 'CallerNotValidatorOwner',
  'type': 'error'
}, { 'inputs': [], 'name': 'ExceedManagingOperatorsPerAccountLimit', 'type': 'error' }, {
  'inputs': [],
  'name': 'FeeExceedsIncreaseLimit',
  'type': 'error'
}, { 'inputs': [], 'name': 'FeeTooLow', 'type': 'error' }, {
  'inputs': [],
  'name': 'NegativeBalance',
  'type': 'error'
}, { 'inputs': [], 'name': 'NoPendingFeeChangeRequest', 'type': 'error' }, {
  'inputs': [],
  'name': 'NotEnoughBalance',
  'type': 'error'
}, { 'inputs': [], 'name': 'OperatorWithPublicKeyNotExist', 'type': 'error' }, {
  'inputs': [],
  'name': 'ValidatorWithPublicKeyNotExist',
  'type': 'error'
}, {
  'anonymous': false,
  'inputs': [{ 'indexed': true, 'internalType': 'address', 'name': 'ownerAddress', 'type': 'address' }],
  'name': 'AccountEnable',
  'type': 'event'
}, {
  'anonymous': false,
  'inputs': [{ 'indexed': true, 'internalType': 'address', 'name': 'ownerAddress', 'type': 'address' }],
  'name': 'AccountLiquidation',
  'type': 'event'
}, {
  'anonymous': false,
  'inputs': [{ 'indexed': false, 'internalType': 'uint256', 'name': 'value', 'type': 'uint256' }],
  'name': 'DeclareOperatorFeePeriodUpdate',
  'type': 'event'
}, {
  'anonymous': false,
  'inputs': [{
    'indexed': true,
    'internalType': 'address',
    'name': 'ownerAddress',
    'type': 'address'
  }, { 'indexed': false, 'internalType': 'uint32', 'name': 'operatorId', 'type': 'uint32' }],
  'name': 'DeclaredOperatorFeeCancelation',
  'type': 'event'
}, {
  'anonymous': false,
  'inputs': [{ 'indexed': false, 'internalType': 'uint256', 'name': 'value', 'type': 'uint256' }],
  'name': 'ExecuteOperatorFeePeriodUpdate',
  'type': 'event'
}, {
  'anonymous': false,
  'inputs': [{ 'indexed': false, 'internalType': 'uint256', 'name': 'value', 'type': 'uint256' }, {
    'indexed': true,
    'internalType': 'address',
    'name': 'ownerAddress',
    'type': 'address'
  }, { 'indexed': true, 'internalType': 'address', 'name': 'senderAddress', 'type': 'address' }],
  'name': 'FundsDeposit',
  'type': 'event'
}, {
  'anonymous': false,
  'inputs': [{ 'indexed': false, 'internalType': 'uint256', 'name': 'value', 'type': 'uint256' }, {
    'indexed': true,
    'internalType': 'address',
    'name': 'ownerAddress',
    'type': 'address'
  }],
  'name': 'FundsWithdrawal',
  'type': 'event'
}, {
  'anonymous': false,
  'inputs': [{ 'indexed': false, 'internalType': 'uint8', 'name': 'version', 'type': 'uint8' }],
  'name': 'Initialized',
  'type': 'event'
}, {
  'anonymous': false,
  'inputs': [{ 'indexed': false, 'internalType': 'uint256', 'name': 'value', 'type': 'uint256' }],
  'name': 'LiquidationThresholdPeriodUpdate',
  'type': 'event'
}, {
  'anonymous': false,
  'inputs': [{ 'indexed': false, 'internalType': 'uint256', 'name': 'value', 'type': 'uint256' }],
  'name': 'MinimumBlocksBeforeLiquidationUpdate',
  'type': 'event'
}, {
  'anonymous': false,
  'inputs': [{ 'indexed': false, 'internalType': 'uint256', 'name': 'oldFee', 'type': 'uint256' }, {
    'indexed': false,
    'internalType': 'uint256',
    'name': 'newFee',
    'type': 'uint256'
  }],
  'name': 'NetworkFeeUpdate',
  'type': 'event'
}, {
  'anonymous': false,
  'inputs': [{ 'indexed': false, 'internalType': 'uint256', 'name': 'value', 'type': 'uint256' }, {
    'indexed': false,
    'internalType': 'address',
    'name': 'recipient',
    'type': 'address'
  }],
  'name': 'NetworkFeesWithdrawal',
  'type': 'event'
}, {
  'anonymous': false,
  'inputs': [{
    'indexed': true,
    'internalType': 'address',
    'name': 'ownerAddress',
    'type': 'address'
  }, { 'indexed': false, 'internalType': 'uint32', 'name': 'operatorId', 'type': 'uint32' }, {
    'indexed': false,
    'internalType': 'uint256',
    'name': 'blockNumber',
    'type': 'uint256'
  }, { 'indexed': false, 'internalType': 'uint256', 'name': 'fee', 'type': 'uint256' }],
  'name': 'OperatorFeeDeclaration',
  'type': 'event'
}, {
  'anonymous': false,
  'inputs': [{
    'indexed': true,
    'internalType': 'address',
    'name': 'ownerAddress',
    'type': 'address'
  }, { 'indexed': false, 'internalType': 'uint32', 'name': 'operatorId', 'type': 'uint32' }, {
    'indexed': false,
    'internalType': 'uint256',
    'name': 'blockNumber',
    'type': 'uint256'
  }, { 'indexed': false, 'internalType': 'uint256', 'name': 'fee', 'type': 'uint256' }],
  'name': 'OperatorFeeExecution',
  'type': 'event'
}, {
  'anonymous': false,
  'inputs': [{ 'indexed': false, 'internalType': 'uint256', 'name': 'value', 'type': 'uint256' }],
  'name': 'OperatorFeeIncreaseLimitUpdate',
  'type': 'event'
}, {
  'anonymous': false,
  'inputs': [{ 'indexed': false, 'internalType': 'uint256', 'name': 'value', 'type': 'uint256' }],
  'name': 'OperatorMaxFeeIncreaseUpdate',
  'type': 'event'
}, {
  'anonymous': false,
  'inputs': [{ 'indexed': true, 'internalType': 'uint32', 'name': 'id', 'type': 'uint32' }, {
    'indexed': false,
    'internalType': 'string',
    'name': 'name',
    'type': 'string'
  }, { 'indexed': true, 'internalType': 'address', 'name': 'ownerAddress', 'type': 'address' }, {
    'indexed': false,
    'internalType': 'bytes',
    'name': 'publicKey',
    'type': 'bytes'
  }, { 'indexed': false, 'internalType': 'uint256', 'name': 'fee', 'type': 'uint256' }],
  'name': 'OperatorRegistration',
  'type': 'event'
}, {
  'anonymous': false,
  'inputs': [{ 'indexed': false, 'internalType': 'uint32', 'name': 'operatorId', 'type': 'uint32' }, {
    'indexed': true,
    'internalType': 'address',
    'name': 'ownerAddress',
    'type': 'address'
  }],
  'name': 'OperatorRemoval',
  'type': 'event'
}, {
  'anonymous': false,
  'inputs': [{ 'indexed': false, 'internalType': 'uint32', 'name': 'operatorId', 'type': 'uint32' }, {
    'indexed': true,
    'internalType': 'address',
    'name': 'ownerAddress',
    'type': 'address'
  }, { 'indexed': false, 'internalType': 'uint256', 'name': 'blockNumber', 'type': 'uint256' }, {
    'indexed': false,
    'internalType': 'uint256',
    'name': 'score',
    'type': 'uint256'
  }],
  'name': 'OperatorScoreUpdate',
  'type': 'event'
}, {
  'anonymous': false,
  'inputs': [{
    'indexed': true,
    'internalType': 'address',
    'name': 'previousOwner',
    'type': 'address'
  }, { 'indexed': true, 'internalType': 'address', 'name': 'newOwner', 'type': 'address' }],
  'name': 'OwnershipTransferred',
  'type': 'event'
}, {
  'anonymous': false,
  'inputs': [{ 'indexed': false, 'internalType': 'uint256', 'name': 'value', 'type': 'uint256' }],
  'name': 'RegisteredOperatorsPerAccountLimitUpdate',
  'type': 'event'
}, {
  'anonymous': false,
  'inputs': [{
    'indexed': true,
    'internalType': 'address',
    'name': 'ownerAddress',
    'type': 'address'
  }, { 'indexed': false, 'internalType': 'bytes', 'name': 'publicKey', 'type': 'bytes' }, {
    'indexed': false,
    'internalType': 'uint32[]',
    'name': 'operatorIds',
    'type': 'uint32[]'
  }, { 'indexed': false, 'internalType': 'bytes[]', 'name': 'sharesPublicKeys', 'type': 'bytes[]' }, {
    'indexed': false,
    'internalType': 'bytes[]',
    'name': 'encryptedKeys',
    'type': 'bytes[]'
  }],
  'name': 'ValidatorRegistration',
  'type': 'event'
}, {
  'anonymous': false,
  'inputs': [{
    'indexed': true,
    'internalType': 'address',
    'name': 'ownerAddress',
    'type': 'address'
  }, { 'indexed': false, 'internalType': 'bytes', 'name': 'publicKey', 'type': 'bytes' }],
  'name': 'ValidatorRemoval',
  'type': 'event'
}, {
  'anonymous': false,
  'inputs': [{ 'indexed': false, 'internalType': 'uint256', 'name': 'value', 'type': 'uint256' }],
  'name': 'ValidatorsPerOperatorLimitUpdate',
  'type': 'event'
}, {
  'inputs': [{ 'internalType': 'address', 'name': 'ownerAddress', 'type': 'address' }],
  'name': 'addressNetworkFee',
  'outputs': [{ 'internalType': 'uint256', 'name': '', 'type': 'uint256' }],
  'stateMutability': 'view',
  'type': 'function'
}, {
  'inputs': [{ 'internalType': 'uint32', 'name': 'operatorId', 'type': 'uint32' }],
  'name': 'cancelDeclaredOperatorFee',
  'outputs': [],
  'stateMutability': 'nonpayable',
  'type': 'function'
}, {
  'inputs': [{ 'internalType': 'uint32', 'name': 'operatorId', 'type': 'uint32' }, {
    'internalType': 'uint256',
    'name': 'operatorFee',
    'type': 'uint256'
  }], 'name': 'declareOperatorFee', 'outputs': [], 'stateMutability': 'nonpayable', 'type': 'function'
}, {
  'inputs': [{ 'internalType': 'address', 'name': 'ownerAddress', 'type': 'address' }, {
    'internalType': 'uint256',
    'name': 'amount',
    'type': 'uint256'
  }], 'name': 'deposit', 'outputs': [], 'stateMutability': 'nonpayable', 'type': 'function'
}, {
  'inputs': [{ 'internalType': 'uint32', 'name': 'operatorId', 'type': 'uint32' }],
  'name': 'executeOperatorFee',
  'outputs': [],
  'stateMutability': 'nonpayable',
  'type': 'function'
}, {
  'inputs': [{ 'internalType': 'address', 'name': 'ownerAddress', 'type': 'address' }],
  'name': 'getAddressBalance',
  'outputs': [{ 'internalType': 'uint256', 'name': '', 'type': 'uint256' }],
  'stateMutability': 'view',
  'type': 'function'
}, {
  'inputs': [{ 'internalType': 'address', 'name': 'ownerAddress', 'type': 'address' }],
  'name': 'getAddressBurnRate',
  'outputs': [{ 'internalType': 'uint256', 'name': '', 'type': 'uint256' }],
  'stateMutability': 'view',
  'type': 'function'
}, {
  'inputs': [],
  'name': 'getDeclaredOperatorFeePeriod',
  'outputs': [{ 'internalType': 'uint256', 'name': '', 'type': 'uint256' }],
  'stateMutability': 'view',
  'type': 'function'
}, {
  'inputs': [],
  'name': 'getExecuteOperatorFeePeriod',
  'outputs': [{ 'internalType': 'uint256', 'name': '', 'type': 'uint256' }],
  'stateMutability': 'view',
  'type': 'function'
}, {
  'inputs': [],
  'name': 'getLiquidationThresholdPeriod',
  'outputs': [{ 'internalType': 'uint256', 'name': '', 'type': 'uint256' }],
  'stateMutability': 'view',
  'type': 'function'
}, {
  'inputs': [],
  'name': 'getNetworkEarnings',
  'outputs': [{ 'internalType': 'uint256', 'name': '', 'type': 'uint256' }],
  'stateMutability': 'view',
  'type': 'function'
}, {
  'inputs': [],
  'name': 'getNetworkFee',
  'outputs': [{ 'internalType': 'uint256', 'name': '', 'type': 'uint256' }],
  'stateMutability': 'view',
  'type': 'function'
}, {
  'inputs': [{ 'internalType': 'uint32', 'name': 'operatorId', 'type': 'uint32' }],
  'name': 'getOperatorById',
  'outputs': [{ 'internalType': 'string', 'name': '', 'type': 'string' }, {
    'internalType': 'address',
    'name': '',
    'type': 'address'
  }, { 'internalType': 'bytes', 'name': '', 'type': 'bytes' }, {
    'internalType': 'uint256',
    'name': '',
    'type': 'uint256'
  }, { 'internalType': 'uint256', 'name': '', 'type': 'uint256' }, {
    'internalType': 'uint256',
    'name': '',
    'type': 'uint256'
  }, { 'internalType': 'bool', 'name': '', 'type': 'bool' }],
  'stateMutability': 'view',
  'type': 'function'
}, {
  'inputs': [{ 'internalType': 'uint32', 'name': 'operatorId', 'type': 'uint32' }],
  'name': 'getOperatorDeclaredFee',
  'outputs': [{ 'internalType': 'uint256', 'name': '', 'type': 'uint256' }, {
    'internalType': 'uint256',
    'name': '',
    'type': 'uint256'
  }, { 'internalType': 'uint256', 'name': '', 'type': 'uint256' }],
  'stateMutability': 'view',
  'type': 'function'
}, {
  'inputs': [{ 'internalType': 'uint32', 'name': 'operatorId', 'type': 'uint32' }],
  'name': 'getOperatorFee',
  'outputs': [{ 'internalType': 'uint256', 'name': '', 'type': 'uint256' }],
  'stateMutability': 'view',
  'type': 'function'
}, {
  'inputs': [],
  'name': 'getOperatorFeeIncreaseLimit',
  'outputs': [{ 'internalType': 'uint256', 'name': '', 'type': 'uint256' }],
  'stateMutability': 'view',
  'type': 'function'
}, {
  'inputs': [{ 'internalType': 'bytes', 'name': 'publicKey', 'type': 'bytes' }],
  'name': 'getOperatorsByValidator',
  'outputs': [{ 'internalType': 'uint32[]', 'name': '', 'type': 'uint32[]' }],
  'stateMutability': 'view',
  'type': 'function'
}, {
  'inputs': [{ 'internalType': 'address', 'name': 'ownerAddress', 'type': 'address' }],
  'name': 'getValidatorsByOwnerAddress',
  'outputs': [{ 'internalType': 'bytes[]', 'name': '', 'type': 'bytes[]' }],
  'stateMutability': 'view',
  'type': 'function'
}, {
  'inputs': [{
    'internalType': 'contract ISSVRegistry',
    'name': 'registryAddress_',
    'type': 'address'
  }, { 'internalType': 'contract IERC20', 'name': 'token_', 'type': 'address' }, {
    'internalType': 'uint64',
    'name': 'minimumBlocksBeforeLiquidation_',
    'type': 'uint64'
  }, { 'internalType': 'uint64', 'name': 'operatorMaxFeeIncrease_', 'type': 'uint64' }, {
    'internalType': 'uint64',
    'name': 'declareOperatorFeePeriod_',
    'type': 'uint64'
  }, { 'internalType': 'uint64', 'name': 'executeOperatorFeePeriod_', 'type': 'uint64' }],
  'name': 'initialize',
  'outputs': [],
  'stateMutability': 'nonpayable',
  'type': 'function'
}, {
  'inputs': [{ 'internalType': 'address', 'name': 'ownerAddress', 'type': 'address' }],
  'name': 'isLiquidatable',
  'outputs': [{ 'internalType': 'bool', 'name': '', 'type': 'bool' }],
  'stateMutability': 'view',
  'type': 'function'
}, {
  'inputs': [{ 'internalType': 'address', 'name': 'ownerAddress', 'type': 'address' }],
  'name': 'isLiquidated',
  'outputs': [{ 'internalType': 'bool', 'name': '', 'type': 'bool' }],
  'stateMutability': 'view',
  'type': 'function'
}, {
  'inputs': [{ 'internalType': 'address[]', 'name': 'ownerAddresses', 'type': 'address[]' }],
  'name': 'liquidate',
  'outputs': [],
  'stateMutability': 'nonpayable',
  'type': 'function'
}, {
  'inputs': [],
  'name': 'owner',
  'outputs': [{ 'internalType': 'address', 'name': '', 'type': 'address' }],
  'stateMutability': 'view',
  'type': 'function'
}, {
  'inputs': [{ 'internalType': 'uint256', 'name': 'amount', 'type': 'uint256' }],
  'name': 'reactivateAccount',
  'outputs': [],
  'stateMutability': 'nonpayable',
  'type': 'function'
}, {
  'inputs': [{ 'internalType': 'string', 'name': 'name', 'type': 'string' }, {
    'internalType': 'bytes',
    'name': 'publicKey',
    'type': 'bytes'
  }, { 'internalType': 'uint256', 'name': 'fee', 'type': 'uint256' }],
  'name': 'registerOperator',
  'outputs': [{ 'internalType': 'uint32', 'name': 'operatorId', 'type': 'uint32' }],
  'stateMutability': 'nonpayable',
  'type': 'function'
}, {
  'inputs': [{ 'internalType': 'bytes', 'name': 'publicKey', 'type': 'bytes' }, {
    'internalType': 'uint32[]',
    'name': 'operatorIds',
    'type': 'uint32[]'
  }, { 'internalType': 'bytes[]', 'name': 'sharesPublicKeys', 'type': 'bytes[]' }, {
    'internalType': 'bytes[]',
    'name': 'sharesEncrypted',
    'type': 'bytes[]'
  }, { 'internalType': 'uint256', 'name': 'amount', 'type': 'uint256' }],
  'name': 'registerValidator',
  'outputs': [],
  'stateMutability': 'nonpayable',
  'type': 'function'
}, {
  'inputs': [{ 'internalType': 'uint32', 'name': 'operatorId', 'type': 'uint32' }],
  'name': 'removeOperator',
  'outputs': [],
  'stateMutability': 'nonpayable',
  'type': 'function'
}, {
  'inputs': [{ 'internalType': 'bytes', 'name': 'publicKey', 'type': 'bytes' }],
  'name': 'removeValidator',
  'outputs': [],
  'stateMutability': 'nonpayable',
  'type': 'function'
}, {
  'inputs': [],
  'name': 'renounceOwnership',
  'outputs': [],
  'stateMutability': 'nonpayable',
  'type': 'function'
}, {
  'inputs': [{ 'internalType': 'address', 'name': 'newOwner', 'type': 'address' }],
  'name': 'transferOwnership',
  'outputs': [],
  'stateMutability': 'nonpayable',
  'type': 'function'
}, {
  'inputs': [{ 'internalType': 'uint64', 'name': 'newDeclareOperatorFeePeriod', 'type': 'uint64' }],
  'name': 'updateDeclareOperatorFeePeriod',
  'outputs': [],
  'stateMutability': 'nonpayable',
  'type': 'function'
}, {
  'inputs': [{ 'internalType': 'uint64', 'name': 'newExecuteOperatorFeePeriod', 'type': 'uint64' }],
  'name': 'updateExecuteOperatorFeePeriod',
  'outputs': [],
  'stateMutability': 'nonpayable',
  'type': 'function'
}, {
  'inputs': [{ 'internalType': 'uint64', 'name': 'blocks', 'type': 'uint64' }],
  'name': 'updateLiquidationThresholdPeriod',
  'outputs': [],
  'stateMutability': 'nonpayable',
  'type': 'function'
}, {
  'inputs': [{ 'internalType': 'uint256', 'name': 'fee', 'type': 'uint256' }],
  'name': 'updateNetworkFee',
  'outputs': [],
  'stateMutability': 'nonpayable',
  'type': 'function'
}, {
  'inputs': [{ 'internalType': 'uint64', 'name': 'newOperatorMaxFeeIncrease', 'type': 'uint64' }],
  'name': 'updateOperatorFeeIncreaseLimit',
  'outputs': [],
  'stateMutability': 'nonpayable',
  'type': 'function'
}, {
  'inputs': [{ 'internalType': 'uint32', 'name': 'operatorId', 'type': 'uint32' }, {
    'internalType': 'uint32',
    'name': 'score',
    'type': 'uint32'
  }], 'name': 'updateOperatorScore', 'outputs': [], 'stateMutability': 'nonpayable', 'type': 'function'
}, {
  'inputs': [{ 'internalType': 'bytes', 'name': 'publicKey', 'type': 'bytes' }, {
    'internalType': 'uint32[]',
    'name': 'operatorIds',
    'type': 'uint32[]'
  }, { 'internalType': 'bytes[]', 'name': 'sharesPublicKeys', 'type': 'bytes[]' }, {
    'internalType': 'bytes[]',
    'name': 'sharesEncrypted',
    'type': 'bytes[]'
  }, { 'internalType': 'uint256', 'name': 'amount', 'type': 'uint256' }],
  'name': 'updateValidator',
  'outputs': [],
  'stateMutability': 'nonpayable',
  'type': 'function'
}, {
  'inputs': [{ 'internalType': 'uint32', 'name': 'operatorId', 'type': 'uint32' }],
  'name': 'validatorsPerOperatorCount',
  'outputs': [{ 'internalType': 'uint32', 'name': '', 'type': 'uint32' }],
  'stateMutability': 'view',
  'type': 'function'
}, {
  'inputs': [],
  'name': 'version',
  'outputs': [{ 'internalType': 'uint32', 'name': '', 'type': 'uint32' }],
  'stateMutability': 'pure',
  'type': 'function'
}, {
  'inputs': [{ 'internalType': 'uint256', 'name': 'amount', 'type': 'uint256' }],
  'name': 'withdraw',
  'outputs': [],
  'stateMutability': 'nonpayable',
  'type': 'function'
}, {
  'inputs': [],
  'name': 'withdrawAll',
  'outputs': [],
  'stateMutability': 'nonpayable',
  'type': 'function'
}, {
  'inputs': [{ 'internalType': 'uint256', 'name': 'amount', 'type': 'uint256' }],
  'name': 'withdrawNetworkEarnings',
  'outputs': [],
  'stateMutability': 'nonpayable',
  'type': 'function'
}]
export default abi