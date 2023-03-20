import { useState } from 'react';

interface IProjectWealthProps {
  balance: number;
  pending: number;
  currency: string;
}

const ProjectWealth = ({ balance, pending, currency }: IProjectWealthProps) => {
  const [compute, setCompute] = useState<boolean>(false);
  const [wealth, setWealth] = useState<number[]>([]);
  const [monthlyExpenses, setMonthlyExpenses] = useState<string>('');
  const [monthlyIncome, setMonthlyIncome] = useState<string>('');
  const [currentMonth] = useState<number>(new Date().getMonth());
  const monthsInAYear = 12;

  const months: string[] = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'June',
    'July',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ];

  const calculate = () => {
    // [1,2,3] => 6
    const expenses = Number(
      monthlyExpenses
        .split(',')
        // @ts-ignore
        .reduce((x: string, y: string) => Number(x) + Number(y))
    );

    const income = Number(monthlyIncome);

    const projection: number[] = new Array(monthsInAYear).fill(0);
    projection[currentMonth] = balance + (income - expenses);

    for (let i = currentMonth; i < monthsInAYear; i++) {
      let prev = projection[i === 0 ? 0 : i - 1]; // Jan = 0, it is not allowed to go to the previous year. Hence the check
      projection[i] = prev + (income - expenses);
    }

    setWealth(projection);
    setCompute(!compute);
  };

  return (
    <>
      {!compute && (
        <div>
          <form>
            <input
              type="text"
              onChange={({ target }) => setMonthlyIncome(target.value)}
              value={monthlyIncome}
              placeholder="Monthly Paycheck..."
            />
            <br />
            <input
              type="text"
              onChange={({ target }) => setMonthlyExpenses(target.value)}
              value={monthlyExpenses}
              placeholder={'Monthly expenses...'}
            />
            <br />
            <button onClick={() => calculate()}>Compute</button>
          </form>
        </div>
      )}
      {compute && (
        <div>
          Projected wealth:
          {wealth.map((amount: number, index: number) => {
            // This month has passed and is thus irrelevant
            if (index < currentMonth) return <></>;
            return (
              <li key={months[index]}>
                {months[index]}: {amount.toFixed(2)} {currency}
              </li>
            );
          })}
          <br />
          <br />
          You have {balance} {currency} available and {pending} {currency}{' '}
          pending
          <br />
          <br />
          <button onClick={() => setCompute(false)}>Start over</button>
        </div>
      )}
    </>
  );
};

export default ProjectWealth;
