import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
	title: 'Apex Trade Zone - Welcome | Regulated Broker in Copy Trading, Trade with Zero Spreads',
	description: 'Apex Trade Zone is a regulated broker in copy trading, trade with zero spreads',
	keywords: 'apex trade zone, regulated broker, copy trading, zero spreads',
	authors: [{ name: 'Apex Trade Zone' }],
};

export default function HomeLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<>
            <Header />
			<div className='home-page'>{children}</div>
            <Footer />
		</>
	);
}