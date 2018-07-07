'use strict';

import { workspace } from 'vscode';

export class Config {

    public static get configuration() {
        return workspace.getConfiguration('parser3ext.settings');
    }

    private static getSettings<T>(val: string): T {
        return Config.configuration.get(val) as T;
    }

    public static get getHost(): string {
        return Config.getSettings<string>('host');
    }

    public static get getLocalIp(): string {
        return Config.getSettings<string>('useLocalIp');
    }

    public static get getPort(): number {
        return Config.getSettings<number>('port');
    }

    public static get getRoot(): string {
        return Config.getSettings<string>('root');
    }

    public static get getNoBrowser(): boolean {
        return Config.getSettings<boolean>('NoBrowser');
    }

    public static get getAdvancedBrowserCmdline(): string {
        return Config.getSettings<string>('AdvanceCustomBrowserCmdLine');
    }

    public static get getChromeDebuggingAttachment(): boolean {
        return Config.getSettings<boolean>('ChromeDebuggingAttachment');
    }

    public static get getCustomBrowser(): string {
        return Config.getSettings<string>('CustomBrowser');
    }

    public static get getIgnoreFiles(): string[] {
        return Config.getSettings<string[]>('ignoreFiles');
    }

    public static get getDonotShowInfoMsg(): boolean {
        return Config.getSettings<boolean>('donotShowInfoMsg');
    }

    public static setDonotShowInfoMsg(val: boolean, isGlobal: boolean = false) {
        Config.configuration.update('donotShowInfoMsg', val, isGlobal);
    }

    public static get getDonotVerifyTags(): boolean {
        return Config.getSettings<boolean>('donotVerifyTags');
    }

    public static setDonotVerifyTags(val: boolean, isGlobal: boolean = false) {
        Config.configuration.update('donotVerifyTags', val, isGlobal);
    }

    public static get getUseWebExt(): boolean {
        return Config.getSettings<boolean>('useWebExt') || false;
    }

    public static get getWait(): number {
        return Config.getSettings<number>('wait');
    }

    public static get getfullReload(): boolean {
        return Config.getSettings<boolean>('fullReload');
    }

    public static get getMount(): Array<Array<string>> {
        return Config.getSettings<Array<Array<string>>>('mount');
    }

    public static get getShowOnStatusbar(): boolean {
        return Config.getSettings<boolean>('showOnStatusbar') || false;
    }

    public static get getFile(): string {
        return Config.getSettings<string>('file');
    }

    public static get getMutiRootWorkspaceName(): string {
        return Config.getSettings<string>('multiRootWorkspaceName');
    }

    public static setMutiRootWorkspaceName(val: string) {
       return Config.configuration.update('multiRootWorkspaceName', val, false);
    }
}