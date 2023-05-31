import * as vscode from 'vscode';
import { exec } from "child_process";
export function activate(context: vscode.ExtensionContext) {

	let disposable = vscode.commands.registerCommand('open-with-rider.open', () => {
        const editor = vscode.window.activeTextEditor;
        if (editor) {
            const document = editor.document;
            const selection = editor.selection;
            const line = selection.start.line + 1;
            const column = selection.start.character + 1;
            const filePath = document.fileName;

            exec(`rider64.exe --line ${line} --column ${column} "${filePath}"`);
        }
	});

	context.subscriptions.push(disposable);
}

// This method is called when your extension is deactivated
export function deactivate() {}
