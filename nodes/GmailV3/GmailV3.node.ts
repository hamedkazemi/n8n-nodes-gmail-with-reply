/* eslint-disable n8n-nodes-base/node-dirname-against-convention */
import type { INodeTypeBaseDescription, IVersionedNodeType } from 'n8n-workflow';
import { VersionedNodeType } from 'n8n-workflow';

import { GmailV2 } from './v2/GmailV2.node';

export class GmailV3 extends VersionedNodeType {
	constructor() {
		const baseDescription: INodeTypeBaseDescription = {
			displayName: 'Gmail With Reply',
			name: 'gmailV3',
			icon: 'file:gmail.svg',
			group: ['transform'],
			subtitle: '={{$parameter["operation"] + ": " + $parameter["resource"]}}',
			description: 'Consume the Gmail API',
			defaultVersion: 2.1,
		};

		const nodeVersions: IVersionedNodeType['nodeVersions'] = {
			2.1: new GmailV2(baseDescription),
		};

		super(nodeVersions, baseDescription);
	}
}
