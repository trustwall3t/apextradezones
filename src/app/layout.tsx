import type { Metadata } from 'next';
import './globals.css';
import DynamicStyles from '@/components/DynamicStyles';
import { Toaster } from 'sonner';
export const metadata: Metadata = {
	title: 'Finitetradezone - Welcome | Regulated Broker in Copy Trading, Trade with Zero Spreads',
	description:
		'Finitetradezone is a regulated broker in copy trading, trade with zero spreads',
	keywords: 'Finitetradezone, broker, copy trading, zero spreads',
	authors: [{ name: 'Finitetradezone' }],
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang='en'>
			<head>
				<script
					dangerouslySetInnerHTML={{
						__html: `
var _smartsupp = _smartsupp || {};
_smartsupp.key = 'ed28dd79a8993cbecc00e7b0d20a9b1ff081c674';
window.smartsupp||(function(d) {
  var s,c,o=smartsupp=function(){ o._.push(arguments)};o._=[];
  s=d.getElementsByTagName('script')[0];c=d.createElement('script');
  c.type='text/javascript';c.charset='utf-8';c.async=true;
  c.src='https://www.smartsuppchat.com/loader.js?';s.parentNode.insertBefore(c,s);
})(document);
						`,
					}}
				/>
				<noscript>
					{' '}
					Powered by{' '}
					<a
						href='https://www.smartsupp.com'
						target='_blank'
					>
						Smartsupp
					</a>
				</noscript>
			</head>
			<body className={``}>
				<DynamicStyles />
				{children}
				<Toaster />
			</body>
		</html>
	);
}
