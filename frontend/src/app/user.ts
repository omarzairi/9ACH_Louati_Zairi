export class User {
  constructor(
    public name: String,
    public email: String,
    public password: String,
    public joinedAt: Date,
    public isAdmin: boolean
  ) {}
}
