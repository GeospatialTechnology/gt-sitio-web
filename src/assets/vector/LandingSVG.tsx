import { motion } from 'framer-motion'

const icon = {
	hidden: {
		opacity: 0,
		pathLength: 0,
	},
	visible: {
		opacity: 1,
		pathLength: 1,
	}
}

const LandingSVG = () => {
	return (
		<motion.svg
			width="1217"
			height="1046"
			viewBox="0 0 1217 1046"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			stroke="rgba(255, 255, 255, 0.4)"
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round"
		>
			<motion.path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M755.351 0L608.273 63.8883L461.106 0L298.06 69.105V128.928L150.893 189.903V322.016L0 386.175V658.124L150.893 722.012V852.702L298.06 915.37V977.836L461.106 1045.18L608.273 981.969L755.351 1045.25L918.486 977.633V915.167L1065.56 852.498V721.741L1216.55 657.92V386.175L1065.56 322.287V190.174L918.486 128.928V69.105L755.351 0ZM595.676 78.9288L460.751 20.596L322.011 79.5385V128.928L472.904 189.903V320.525C484.002 323.23 493.463 328.883 499.57 336.459C505.677 344.036 508.027 353.033 506.191 361.819C504.356 370.604 498.459 378.597 489.568 384.346C480.678 390.095 469.384 393.22 457.735 393.153C444.887 393.136 432.567 389.249 423.449 382.336C414.331 375.422 409.151 366.042 409.034 356.229C409.034 337.937 426.155 322.829 448.953 319.645V200.608L322.011 149.321V224.795C332.978 227.407 342.397 232.877 348.624 240.25C354.852 247.623 357.494 256.431 356.09 265.14C354.686 273.848 349.325 281.903 340.941 287.902C332.557 293.901 321.682 297.462 310.213 297.965C303.798 298.027 297.431 297.123 291.474 295.304C285.517 293.485 280.089 290.786 275.5 287.363C270.91 283.94 267.25 279.859 264.728 275.353C262.206 270.848 260.872 266.008 260.803 261.109C260.924 252.77 264.639 244.694 271.374 238.13C278.109 231.565 287.488 226.879 298.06 224.795V149.253L174.489 200.608V322.287L322.011 386.175V657.92L174.489 721.808V841.997L298.06 894.3V821.13C287.412 819.152 277.947 814.494 271.188 807.906C264.429 801.319 260.771 793.185 260.803 784.816C260.803 774.844 265.99 765.279 275.223 758.228C284.456 751.176 296.978 747.215 310.036 747.215C323.093 747.215 335.616 751.176 344.849 758.228C354.082 765.279 359.269 774.844 359.269 784.816C359.147 793.155 355.432 801.231 348.697 807.795C341.963 814.359 332.584 819.046 322.011 821.13V894.571L448.598 841.997V724.518C437.59 722.835 427.678 718.303 420.536 711.688C413.393 705.073 409.456 696.779 409.389 688.205C409.401 683.3 410.68 678.445 413.154 673.918C415.627 669.392 419.247 665.283 423.804 661.828C428.362 658.372 433.768 655.638 439.712 653.781C445.657 651.925 452.023 650.983 458.445 651.01C464.867 650.983 471.232 651.925 477.177 653.781C483.121 655.638 488.527 658.372 493.085 661.828C497.642 665.283 501.262 669.392 503.736 673.918C506.209 678.445 507.489 683.3 507.5 688.205C507.502 696.208 504.093 703.995 497.787 710.387C491.481 716.78 482.623 721.431 472.549 723.638V852.566L321.568 915.235V967.199L460.396 1024.72L595.322 966.657V653.923H618.918V966.386L755.351 1024.99L894.18 967.538V915.235L743.198 852.837V723.841C733.17 721.576 724.359 716.909 718.066 710.53C711.773 704.15 708.331 696.395 708.247 688.408C708.27 683.486 709.57 678.616 712.071 674.079C714.572 669.543 718.225 665.43 722.819 661.978C727.413 658.526 732.858 655.803 738.837 653.967C744.817 652.131 751.214 651.218 757.658 651.281C769.747 651.231 781.424 654.63 790.404 660.811C799.383 666.992 805.019 675.511 806.206 684.699C807.394 693.887 804.048 703.083 796.824 710.486C789.6 717.888 779.018 722.965 767.15 724.722V841.997L894.18 894.571V821.13C882.297 819.148 871.814 813.842 864.795 806.254C857.777 798.667 854.729 789.349 856.253 780.132C857.777 770.916 863.761 762.468 873.029 756.452C882.297 750.435 894.177 747.285 906.333 747.621C932.945 747.621 955.389 764.491 955.389 784.816C955.267 793.155 951.552 801.231 944.817 807.795C938.083 814.359 928.704 819.046 918.131 821.13V894.571L1041.61 841.997V721.808L894.18 657.92V386.175L1041.61 322.287V200.337L918.131 148.915V224.388C929.195 226.929 938.727 232.377 945.04 239.767C951.353 247.157 954.041 256.015 952.629 264.772C951.216 273.53 945.795 281.625 937.323 287.624C928.851 293.624 917.874 297.143 906.333 297.558C899.918 297.621 893.551 296.717 887.594 294.897C881.637 293.078 876.209 290.38 871.62 286.956C867.03 283.533 863.37 279.452 860.848 274.947C858.326 270.442 856.992 265.601 856.922 260.702C857.044 252.363 860.759 244.287 867.494 237.723C874.229 231.159 883.607 226.472 894.18 224.388V148.982L767.948 200.405V319.374C790.746 322.287 807.867 337.666 807.867 355.959C807.867 365.895 802.698 375.425 793.499 382.451C784.299 389.477 771.821 393.424 758.811 393.424C745.801 393.424 733.323 389.477 724.123 382.451C714.924 375.425 709.755 365.895 709.755 355.959C709.755 339.089 724.215 325.2 743.997 320.254V189.565L894.89 128.59V79.2675L756.15 20.325L619.273 79.5385V391.934H596.12V78.9288H595.676ZM1053.86 337.666L1192.95 396.609V516.797L1092.98 560.36C1086.34 554.786 1077.68 550.856 1068.09 549.075C1058.51 547.294 1048.45 547.744 1039.2 550.367C1029.96 552.99 1021.95 557.667 1016.22 563.794C1010.48 569.922 1007.28 577.22 1007.02 584.75C1006.9 592.558 1009.98 600.199 1015.84 606.597C1021.71 612.995 1030.05 617.828 1039.69 620.416C1049.34 623.004 1059.81 623.216 1069.62 621.024C1079.43 618.831 1088.1 614.343 1094.39 608.192C1099 603.82 1102.26 598.71 1103.91 593.243C1105.57 587.776 1105.59 582.094 1103.98 576.62L1192.95 537.461V647.487L1053.86 706.158L918.486 647.487V526.96L1020.32 480.551C1027.15 485.901 1035.89 489.585 1045.46 491.136C1055.02 492.687 1064.98 492.036 1074.06 489.265C1083.14 486.494 1090.94 481.728 1096.47 475.569C1102 469.411 1105.01 462.138 1105.13 454.67C1105.1 449.323 1103.57 444.042 1100.65 439.182C1097.73 434.322 1093.48 429.994 1088.19 426.49C1082.9 422.985 1076.69 420.384 1069.98 418.861C1063.27 417.338 1056.21 416.928 1049.27 417.658C1042.34 418.389 1035.68 420.243 1029.76 423.096C1023.84 425.95 1018.79 429.736 1014.94 434.203C1011.09 438.67 1008.53 443.714 1007.44 448.996C1006.35 454.279 1006.75 459.678 1008.61 464.833L918.486 506.092V396.609L1053.86 337.666ZM23.5077 396.609L162.691 337.666L298.06 396.609V506.092L207.932 464.833C208.993 461.507 209.5 458.093 209.44 454.67C209.44 444.734 204.272 435.204 195.072 428.178C185.873 421.152 173.395 417.205 160.385 417.205C147.374 417.205 134.897 421.152 125.697 428.178C116.497 435.204 111.329 444.734 111.329 454.67C111.329 475.266 133.417 491.865 160.739 491.865C174.489 491.865 187.352 487.461 196.134 480.212L298.06 526.96V647.487L162.691 706.158L23.5077 647.487V537.122L112.482 576.349C110.835 581.831 110.834 587.526 112.479 593.008C114.124 598.49 117.373 603.617 121.982 608.003C126.59 612.39 132.439 615.923 139.09 618.337C145.741 620.752 153.021 621.985 160.385 621.945C167.208 622.491 174.105 621.935 180.629 620.314C187.153 618.694 193.158 616.044 198.256 612.537C203.353 609.03 207.429 604.745 210.219 599.958C213.008 595.171 214.45 589.99 214.45 584.75C214.45 579.511 213.008 574.33 210.219 569.543C207.429 564.756 203.353 560.47 198.256 556.963C193.158 553.457 187.153 550.807 180.629 549.186C174.105 547.566 167.208 547.01 160.385 547.556C153.375 547.508 146.437 548.637 140.061 550.861C133.685 553.085 128.025 556.351 123.482 560.428L23.5077 516.526V396.337V396.609ZM456.138 609.75V435.497L722.263 553.721V435.497H760.319V609.75L494.194 492.746V609.75H456.138Z"
				fill="currentColor"
				fillOpacity="0.3"
				variants={icon}
				initial="hidden"
				animate="visible"
				transition={{
					default: { duration:4, ease: 'easeInOut' },
					fill: { duration: 2, ease: [1, 0, 0.8, 1] }
				}}
			></motion.path>
		</motion.svg>
	)
}

export default LandingSVG
