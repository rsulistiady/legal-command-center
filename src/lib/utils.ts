import clsx from 'clsx';

export const cn = (...inputs: Array<string | undefined | false>) => clsx(inputs);

export const formatDate = (date: string) =>
  new Intl.DateTimeFormat('en-US', { month: 'short', day: 'numeric', year: 'numeric' }).format(new Date(date));
