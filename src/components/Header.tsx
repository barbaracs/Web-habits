import { Plus } from 'phosphor-react'
import logoImage from '../assets/logo.svg'

const Header = () => {
    return (
        <div className="w-full max-w-5xl px-6 flex flex-col gap-16">
            <div className="w-full max-w-3xl mx-auto flex items-center justify-between">
            <img src={logoImage} alt="Habits"/>

            <button 
                type="button"
                className="border border-violet-500 font-semibold rounded-lg px-6 py-4 flex items-center gap-3 hover:border-violet-300"
            >
                <Plus 
                size={20} 
                className="text-violet-500 hover:border-violet-300"
                />
                Novo hábito
            </button>
            </div>
        </div>
    )
}

export default Header