export class HashManagerMock {
	public hash = async (plaintext: string): Promise<string> => {
		return 'hash-mock';
	};

	public compare = async (
		plaintext: string,
		hash: string
	): Promise<boolean> => {
		switch (plaintext) {
			case 'godofshinobi':
				return hash === 'hash-mock-hashirama';

			case 'jubirama':
				return hash === 'hash-mock-madara';

			default:
				return false;
		}
	};
}
