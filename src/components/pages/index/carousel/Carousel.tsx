import { items } from '@/components/pages/index/carousel/carouselItems'
import { useEffect, useState, type CSSProperties } from 'react'
import { motion } from 'framer-motion'

const CarouselReact = (props: any) => {
	const [carouselIndex, setCarouselIndex] = useState(0)

	const calcPosition = (index: number) => {
		const width = 160
		const gap = 160

		const align = width / -2
		const itemSeparation = width * index
		const itemGap = gap * index
		const modifier = (width + gap) * carouselIndex

		const pos = align + itemGap + itemSeparation - modifier

		let styles: CSSProperties = {
			maxWidth: `${width}px`,
			minWidth: `${width}px`,
			left: '50%'
		}

		return { styles, pos }
	}

	const calcPositionButton = (index: number) => {
		const width = 16
		const gap = 4

		const align = width / -2
		const itemSeparation = width * index
		const itemGap = gap * index
		const modifier = (width + gap) * carouselIndex

		const pos = align + itemGap + itemSeparation - modifier

		const off = Math.abs(index - carouselIndex)
		const opacity = 1 - off / 2.6

		let styles: CSSProperties = {
			maxWidth: `${width}px`,
			minWidth: `${width}px`,
			left: '50%',
			transform: `translateX(${pos}px)`,
			opacity,
			pointerEvents: opacity < 0.1 ? 'none' : 'auto'
		}

		return styles
	}

	useEffect(() => {
		let timeout = setTimeout(() => {
			setCarouselIndex((prev) => (prev + 1) % items.length)
		}, 5000)
		return () => {
			clearTimeout(timeout)
		}
	}, [carouselIndex])

	return (
		<>
			<ul className="w-full flex relative h-96 items-center overflow-hidden isolate">
				<div className="absolute bg-gradient-to-r from-transparent to-bg right-0 h-full w-1/3 z-10 pointer-events-none"></div>
				<div className="absolute bg-gradient-to-l from-transparent to-bg left-0 h-full w-1/3 z-10 pointer-events-none"></div>
				{items.map((item, index) => (
					<motion.li
						key={index}
						initial={{
							opacity: 0
						}}
						animate={{
							opacity: 1,
							x: calcPosition(index).pos
						}}
						whileHover={{
							scale: 1.1,
							color: '#66CC66'
						}}
						transition={{
							type: 'spring',
							stiffness: 120
						}}
						style={calcPosition(index).styles}
						className="flex flex-col items-center gap-6 absolute text-neutral-500"
					>
						<div className="w-full aspect-square">{props[item.title]}</div>
						<b className="text-black">{item.title}</b>
						<p className="text-center text-sm text-black/60 font-semibold">{item.description}</p>
					</motion.li>
				))}
			</ul>
			<div className="flex justify-center w-full relative">
				{items.map((_, index) => (
					<button
						key={index}
						style={calcPositionButton(index)}
						onClick={() => setCarouselIndex(index)}
						className="rounded-full aspect-square bg-primary-500 transition-all duration-1000"
					></button>
				))}
			</div>
		</>
	)
}

export default CarouselReact
