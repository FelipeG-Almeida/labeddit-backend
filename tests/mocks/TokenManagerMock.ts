import { TokenPayload } from '../../src/models/User';

export class TokenManagerMock {
	public createToken = (payload: TokenPayload): string => {
		if (payload.id === 'id-mock') {
			return 'token-mock';
		} else if (payload.id === 'id-mock-hashirama') {
			return 'token-mock-hashirama';
		} else {
			return 'token-mock-madara';
		}
	};

	public getPayload = (token: string): TokenPayload | null => {
		if (token === 'token-mock-hashirama') {
			return {
				id: 'id-mock-hashirama',
				nick: 'Hashirama',
			};
		} else if (token === 'token-mock-madara') {
			return {
				id: 'id-mock-madara',
				nick: 'Madara',
			};
		} else {
			return null;
		}
	};
}
