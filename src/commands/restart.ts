import {
	commands,
	type ExtensionContext,
	type LanguageClient,
	ServiceStat,
} from "coc.nvim";

export function register(context: ExtensionContext, client: LanguageClient) {
	context.subscriptions.push(
		commands.registerCommand("zuban.restart", async () => {
			if (client) {
				if (client.serviceState !== ServiceStat.Stopped) {
					await client.stop();
				}
			}
			client.start();
		}),
	);
}
