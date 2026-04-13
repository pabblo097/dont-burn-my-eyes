import t from '@root/src/shared/helpers/t';

export const getButtonLabel = (isUrlInList: boolean) =>
   isUrlInList ? t('includeThisPage') : t('excludeThisPage');
