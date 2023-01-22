import * as Checkbox from '@radix-ui/react-checkbox';
import { Check } from 'phosphor-react';
import { useEffect } from 'react';

interface NewHabitCheckboxProps {
    weekDays: number[]
    setWeekDays: (days: number[]) => void
}

const availableWeekDays = [
    'Domingo',
    'Segunda-feira',
    'Terça-feira',
    'Quarta-feira',
    'Quinta-feira',
    'Sexta-feira',
    'Sábado'
]

const NewHabitCheckbox = ({ weekDays, setWeekDays }: NewHabitCheckboxProps) => {
    const handleCheckWeekDay = (weekDay: number) => {
        if (weekDays.includes(weekDay)) {
            const updatedWeekDays = weekDays.filter(day => day !== weekDay)

            setWeekDays(updatedWeekDays)
        } else {
            const updatedWeekDays = [... weekDays, weekDay]

            setWeekDays(updatedWeekDays)
        }
    }

    return (
        <div className="flex flex-col gap-2 mt-3">
            {availableWeekDays.map((day, index) => {
                return (
                        <Checkbox.Root
                            key={day}
                            className="flex items-center gap-3 group"
                            checked={weekDays.includes(index)}
                            onCheckedChange={() => handleCheckWeekDay(index)}
                        >
                            <div 
                                className="h-8 w-8 rounded-lg flex items-center justify-center bg-zinc-900 border-2 border-zinc-800 group-data-[state=checked]:bg-green-500 group-data-[state=checked]:border-green-500 transition-colors"
                            >
                                <Checkbox.Indicator>
                                    <Check size={20} className="text-white" />
                                </Checkbox.Indicator>
                            </div>
            
                            <span className="text-white leading-tight">
                                {day}
                            </span>
                        </Checkbox.Root>
                    )
                })
            }
        
        </div>
    )
}

export default NewHabitCheckbox