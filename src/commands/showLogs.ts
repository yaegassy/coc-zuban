import { commands, type ExtensionContext, type LanguageClient } from "coc.nvim";

export async function register(
	context: ExtensionContext,
	client: LanguageClient,
) {
	await client.onReady();

	context.subscriptions.push(
		commands.registerCommand("zuban.showLogs", () => {
			if (client.outputChannel) {
				client.outputChannel.show();
			}
		}),
	);
}
