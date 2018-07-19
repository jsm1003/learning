import Chain from './Chain-of-responsibility';

/**
 * Demo
 */

function validator(num: number): string | void {
  if (num <= 10) {
    console.log('检查通过');

    return 'nextProcess';
  } else {
    console.log('检查不通过');
  }
}

function checkPermission(orderState: number): string | void {
  if (orderState === 6) {
    console.log('订单状态正常，可以下单');

    return 'nextProcess';
  } else {
    console.log('订单状态异常');
  }
}

const validatorChain: Chain = new Chain(validator);
const checkPermissionChain: Chain = new Chain(checkPermission);

validatorChain.setNextProcess(checkPermissionChain);

validatorChain.processRequest(11);
