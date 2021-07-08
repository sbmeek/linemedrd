import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Schema as MSchema } from 'mongoose';

import { User, UserDocument, Roles } from './user.model';
import { CreateUserInput, UpdateUserInput, ListUserInput } from './user.input';

@Injectable()
export class UserService {
	constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}

	private assignRole(n: number): Roles {
		let r: Roles;

		switch (n) {
			case 0:
				r = Roles.PATIENT;
				break;
			case 1:
				r = Roles.DOCTOR;
				break;
			case 2:
				r = Roles.ADMIN;
				break;
			default:
				r = Roles.PATIENT;
				break;
		}
		return r;
	}

	getById(_id: MSchema.Types.ObjectId) {
		return this.userModel.findById(_id).exec();
	}

	list(filters: ListUserInput) {
		return this.userModel.find({ ...filters }).exec();
	}

	async create(payload: CreateUserInput) {
		const newUser = new this.userModel(payload);
		newUser.password = await newUser.hashPwd(payload.password);
		newUser.role = this.assignRole(payload.role);
		return newUser.save();
	}

	update(payload: UpdateUserInput) {
		return this.userModel
			.findByIdAndUpdate(payload._id, payload, {
				new: true
			})
			.exec();
	}

	delete(_id: MSchema.Types.ObjectId) {
		return this.userModel.findByIdAndDelete(_id).exec();
	}
}
