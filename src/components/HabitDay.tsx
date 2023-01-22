
import * as Popover from '@radix-ui/react-popover';
import clsx from 'clsx';
import ProgressBar from './ProgressBar';
import HabitPopover from './HabitPopover';
import dayjs from 'dayjs';

interface HabitDayProps {
    date: Date
    completed?: number
    amount?: number
}

const HabitDay = ({ date, completed = 0, amount = 0 }: HabitDayProps) => {
    const percentageCompleted = amount > 0
        ? Math.round((completed / amount) * 100) 
        : 0

    const dayInMonth = dayjs(date).format('DD/MM')
    const dayOfWeek = dayjs(date).format('dddd')

    return (
        <Popover.Root>
            <Popover.Trigger
                className={clsx('w-10 h-10 border-2 rounded-lg', {
                    'bg-zinc-900 border-zinc-800': percentageCompleted === 0,
                    'bg-violet-900 border-violet-700': percentageCompleted > 0 && percentageCompleted < 20,
                    'bg-violet-800 border-violet-600': percentageCompleted >= 20 && percentageCompleted < 40,
                    'bg-violet-700 border-violet-500': percentageCompleted >= 40 && percentageCompleted < 60,
                    'bg-violet-600 border-violet-500': percentageCompleted >= 60 && percentageCompleted < 80,
                    'bg-violet-500 border-violet-400': percentageCompleted >= 80,
                })}
            />

            <Popover.Portal>
                <Popover.Content
                    className="min-w-[320px] p-6 rounded-2xl bg-zinc-900 flex flex-col"
                >
                    <span className="font-semibold text-zinc-400">
                        {dayOfWeek}
                    </span>

                    <span className="mt-1 font-extrabold leading-tight text-3xl">
                        {dayInMonth}
                    </span>

                    <ProgressBar progress={percentageCompleted} />

                    <HabitPopover date={date} />

                    <Popover.Arrow
                        height={8}
                        width={16}
                        className="fill-zinc-900"
                    />
                </Popover.Content>
            </Popover.Portal>
        </Popover.Root>
    )
}

export default HabitDay
