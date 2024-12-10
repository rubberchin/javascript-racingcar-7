const INPUT_MESSAGES = {

  ENTER_CAR_NAMES : '경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n',
  ENTER_HOW_MANY_ROUNDS : '시도할 횟수는 몇 회인가요?\n',


}

const CAR = {
  MINIMUM_FORWARDING_NUMBER : 4,
  STEP : 1,
  NAME_DELIMITER : ','
}

const ERROR_MESSAGES = {
  CAR_NAME_LENGTH_LIMIT : '[ERROR] 자동차 이름은 5자 이하여야 해요.',
  EMPTY_INPUT : '[ERROR] 입력값이 없어요!',
  SHOULD_BE_NATURAL_NUMBER : '[ERROR] 경기 횟수는 자연수로 입력해주세요!',
  HAS_DUPLICATE_CAR_NAME : '[ERROR] 중복된 자동차 이름이 있어요!',
  HAS_EMPTY_CAR_NAME : '[ERROR] 자동차 이름은 비워둘 수 없어요! 모든 자동차의 이름을 제대로 입력했는지 확인해주세요!',


}


export { INPUT_MESSAGES, CAR, ERROR_MESSAGES};