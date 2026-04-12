import clsx from 'clsx';

export const cn = (...inputs: Array<string | undefined | false>) => clsx(inputs);

const parseLocalDate = (date: string) => {
  const dateOnlyMatch = date.match(/^(\d{4})-(\d{2})-(\d{2})$/);

  if (dateOnlyMatch) {
    const [, year, month, day] = dateOnlyMatch;
    return new Date(Number(year), Number(month) - 1, Number(day));
  }

  return new Date(date);
};

export const formatDate = (date: string) =>
  new Intl.DateTimeFormat('en-US', { month: 'short', day: 'numeric', year: 'numeric' }).format(parseLocalDate(date));
