import {
	type ExtensionContext,
	LanguageClient,
	type LanguageClientOptions,
	type ServerOptions,
	services,
	window,
	workspace,
} from "coc.nvim";
import * as restartCommandFeature from "./commands/restart";
import * as showLogsCommandFeature from "./commands/showLogs";
import { getZubanBinaryPath } from "./tool";

let client: LanguageClient;

export async function activate(context: ExtensionContext): Promise<void> {
	if (!workspace.getConfiguration("zuban").get("enable")) return;

	const command = await getZubanBinaryPath();
	if (!command) {
		window.showWarningMessage('coc-zuban | "zuban" binary does not exist.`');
		return;
	}

	const serverOptions: ServerOptions = {
		command: command,
		args: ["server"],
	};

	const clientOptions: LanguageClientOptions = {
		documentSelector: ["python"],
		disabledFeatures: getLanguageClientDisabledFeatures(),
	};

	client = new LanguageClient("zuban", "Zuban", serverOptions, clientOptions);

	context.subscriptions.push(services.registerLanguageClient(client));

	restartCommandFeature.register(context, client);
	showLogsCommandFeature.register(context, client);
}

// **REF**: disabledFeatures
// `:h coc-config.txt`
const DISABLED_FEATURE_MAPPINGS = [
	{ config: "disableDiagnostics", features: ["diagnostics", "pullDiagnostic"] },
	{ config: "disableCompletion", features: ["completion"] },
	{ config: "disableHover", features: ["hover"] },
	{ config: "disableDefinition", features: ["definition"] },
	{ config: "disableTypeDefinition", features: ["typeDefinition"] },
	{ config: "disableDeclaration", features: ["declaration"] },
	{ config: "disableImplementation", features: ["implementation"] },
	{ config: "disableReferences", features: ["references"] },
	{ config: "disableRename", features: ["rename"] },
	{ config: "disableDocumentHighlight", features: ["documentHighlight"] },
] as const;

function getLanguageClientDisabledFeatures() {
	const config = workspace.getConfiguration("zuban");
	return DISABLED_FEATURE_MAPPINGS.flatMap(({ config: key, features }) =>
		config.get<boolean>(key, false) ? features : [],
	);
}
