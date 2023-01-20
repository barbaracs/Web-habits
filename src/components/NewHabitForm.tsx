import { Check } from "phosphor-react"
import { FormEvent, useState } from "react"
import { api } from "../lib/axios"
import NewHabitCheckbox from "./NewHabitCheckbox"

interface NewHabitFormProps {
    setOpenModal: (open: boolean) => void 
}

const NewHabitForm = ({ setOpenModal }: NewHabitFormProps) => {
    const [habit, setHabit] = useState<string>('')
    const [weekDays, setWeekDays] = useState<number[]>([])
    
    const createNewHabit = (event: FormEvent) => {
        event.preventDefault()

        if (!habit || weekDays.length === 0) return

        api.post('habits', {
            title: habit,
            weekDays
        }).then(() => {
            alert('Hábito criado com sucesso!')

            setHabit('')
            setWeekDays([])
            setOpenModal(false)
        })
    }

    return (
        <form 
            onSubmit={createNewHabit}
            className="w-full flex flex-col mt-6"
        >
            <label
                htmlFor="title"
                className="font-semibold leading-tight"
            >
                Qual seu comprometimento?
            </label>

            <input
                type="text"
                id="title"
                placeholder="Ex: fazer exercício, beber água, etc..."
                className="p-4 rounded-lg mt-3 bg-zinc-800 text-white placeholder:text-zinc-400"
                autoFocus
                value={habit}
                onChange={event => setHabit(event.target.value)}
            />

            <label
                htmlFor=""
                className="font-semibold leading-tight mt-4"
            >
                Qual a recorrência?
            </label>

            <NewHabitCheckbox 
                weekDays={weekDays} 
                setWeekDays={setWeekDays}
            />

            <button
                type="submit"
                className="mt-6 rounded-lg p-4 flex items-center justify-center gap-3 font-semibold bg-green-600 hover:bg-green-500"
            >
                <Check size={20} weight="bold" />
                Confirmar
            </button>
        </form>
    )
}

export default NewHabitForm