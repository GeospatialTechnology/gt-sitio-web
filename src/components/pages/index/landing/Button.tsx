import { motion } from 'framer-motion'

interface Props {
	text?: string
}

const Button = ({ text }: Props) => {
	return (
		<motion.button
			className="bg-white text-black rounded-full px-8 py-4 font-bold cursor-pointer select-none"
			whileHover={{
				scale: 1.2,
				boxShadow: '0 0 1200px 12px rgb(255, 255, 255)'
			}}
			whileTap={{
				scale: 1.2,
				boxShadow: '0 0 1200px 12px rgb(255, 255, 255)'
			}}
		>
			{text}
		</motion.button>
	)
}

export default Button
