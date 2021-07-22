export const recoverPwdHtml = (
	name: string,
	href: string,
	encToken: string
) => `<div
style="font-family: Cambria, Roboto, Helvetica, Arial, sans-serif; max-width: 600px; padding: 10px; margin: 0 auto;">
<table style="border-collapse: collapse; margin: auto;">
	<tr>
		<td style="padding: 10px;">
			<img src="https://i.postimg.cc/zB3p0nHH/lmedicon.png">
		</td>
		<td style="padding: 10px;">
			<h2 style="font-size: 2.3em; color: #66d2bc;">LineMedRD</h2>
		</td>
	</tr>
</table>
<table style="border-collapse: collapse; margin: auto;">
	<tr>
		<td>
			<div style="max-width: 80%;
	margin: auto; margin-bottom: 20px; font-size: 1.17em; font-weight: bold;">Hola <span
					style="color: #66d2bc;">${name}</span>,</div>
			<div style="max-width: 80%; margin: auto;">Al parecer ha solicitado la recuperación de su contraseña en <span
					style="color: #66d2bc; font-weight: bold;">LineMedRD</span>, acceda al siguiente enlace para continuar con el proceso.</div>
			<div style="padding: 24px; text-align: center;">
				<div style="padding: 14px 0;">
					<a href="${href}/setnewpwd/${encodeURIComponent(encToken)}" style="color: #fff;
				padding: 14px 26px;
				font-size: 0.875rem;
				max-width: 142px;
				box-sizing: border-box;
				font-weight: 500;
				line-height: 1.75;
				border-radius: 4px;
				letter-spacing: 0.02857em;
				text-transform: uppercase;
				background-color: #66d2bc;
				text-decoration: none;
				font-weight: 600;
				border-radius: 25px;">Recuperar</a>
				</div>
				<div>
					<span style="margin-top: 14px;">¿No ve un botón? <a
							href="${href}/setnewpwd/${encodeURIComponent(encToken)}"
							style="color: #3b78e0; text-decoration: none;">Click aquí</a>.</span>
				</div>
			</div>
			<div style="max-width: 80%; margin: auto;">
				Si usted no realizó esta solicitud puede ignorar este mensaje.
			</div>
			<div style="max-width: 80%; margin: 16px auto;">
				Este link estará activo por 1 día. Si expira lo más conveniente es <a href="${href}/recoverpwd"
					style="color: #3b78e0; text-decoration: none;">solicitar otro</a>.
			</div>
		</td>
	</tr>
</table>
</div>`;
