import AcmeLogo from "@/app/ui/acme-logo"
import styles from './ui/home.module.css'
import Link from "next/link"
export default function Page() {
	return (
		<main className={styles.shape}>
			<div className={styles.shape}>
				{/* <AcmeLogo /> */}
			</div>
			<div className={styles.shape}>
				<div className={styles.shape}>
					<div className='h-0 w-0 border-b-[30px] border-l-[20px] border-r-[20px border-b-black border-l-transparent border-r-transparent' />
					<p
						className={`text-xl text-gray-800 md:text-3xl md:leading-normal`}
					>
						<strong>Welcome to Acme.</strong> This is the example
						for the{" "}
						<a
							href='https://nextjs.org/learn/'
							className='text-blue-500'
						>
							Next.js Learn Course
						</a>
						, brought to you by Vercel.
					</p>
					<Link
						href='/login'
						className='flex items-center gap-5 self-start rounded-lg bg-blue-500 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-blue-400 md:text-base'
					>
						<span>Log in</span>
					</Link>
				</div>
				<div className='flex items-center justify-center p-6 md:w-3/5 md:px-28 md:py-12'>
					{/* Add Hero Images Here */}
				</div>
			</div>
		</main>
	)
}
