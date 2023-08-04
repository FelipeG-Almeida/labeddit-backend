import { UserDB } from '../../src/models/User';
import { BaseDataBase } from '../../src/database/BaseDatabase';

const usersMock: UserDB[] = [
	{
		id: 'id-mock-hashirama',
		nick: 'Hashirama',
		email: 'hashirama@email.com',
		password: 'hash-mock-hashirama', // senha = "godofshinobi"
		created_at: new Date().toISOString(),
	},
	{
		id: 'id-mock-madara',
		nick: 'Madara',
		email: 'madara@email.com',
		password: 'hash-mock-madara', // senha = "jubirama"
		created_at: new Date().toISOString(),
	},
];

export class UserDatabaseMock extends BaseDataBase {
	public static TABLE_USERS = 'users';

	public async findUserById(id: string): Promise<UserDB | undefined> {
		return usersMock.filter((user) => user.id === id)[0];
	}

	public async findUserByEmail(email: string): Promise<UserDB | undefined> {
		return usersMock.filter((user) => user.email === email)[0];
	}

	public async insertUser(newUserDB: UserDB): Promise<void> {}
}
