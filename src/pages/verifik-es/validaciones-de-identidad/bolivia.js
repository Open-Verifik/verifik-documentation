import React, { useEffect, useState } from 'react';
import Layout from '@theme/Layout';
import { useHistory } from '@docusaurus/router';

export default function OldGitBookRedirect() {
	const [countdown, setCountdown] = useState(5);
	const history = useHistory();
	const redirectUrl = '/docs-es/identidad/bolivia';

	useEffect(() => {
		const timer = setInterval(() => {
			setCountdown((prev) => {
				if (prev <= 1) {
					clearInterval(timer);
					history.push(redirectUrl);
					return 0;
				}
				return prev - 1;
			});
		}, 1000);

		return () => clearInterval(timer);
	}, [history, redirectUrl]);

	return (
		<Layout title="Esta página ha sido movida" description="Redirigiendo a la nueva ubicación">
			<div style={{ padding: '2rem', textAlign: 'center' }}>
				<h1>⚠️ Esta página ha sido movida</h1>
				<p>Esta URL pertenecía a la documentación antigua de GitBook y ahora se encuentra en una nueva ubicación.</p>
				<p>
					<strong>Nueva URL:</strong>{' '}
					<a href={redirectUrl}>
						{redirectUrl}
					</a>
				</p>
				<p>
					Serás redirigido automáticamente en <strong>{countdown}</strong> segundos...
				</p>
				<p>
					<a 
						href={redirectUrl}
						style={{
							display: 'inline-block',
							padding: '12px 24px',
							backgroundColor: '#2563eb',
							color: 'white',
							textDecoration: 'none',
							borderRadius: '6px',
							fontWeight: 'bold',
						}}
					>
						Ir a la Nueva Documentación
					</a>
				</p>
			</div>
		</Layout>
	);
}

