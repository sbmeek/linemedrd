import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Schema as MSchema } from 'mongoose';

import { UserAdress, UserAdressDocument } from './user-adress.model';
import { CreateAdressInput, UpdateAdressInput } from './user-adress.input';

@Injectable()
export class UserAdressService {
	constructor(
		@InjectModel(UserAdress.name) private adressModel: Model<UserAdressDocument>
	) {}

	getById(_id: MSchema.Types.ObjectId) {
		return this.adressModel.findById(_id).exec();
	}

	create(payload: CreateAdressInput) {
		const newAdress = new this.adressModel(payload);
		return newAdress.save();
	}

	update(payload: UpdateAdressInput) {
		return this.adressModel
			.findByIdAndUpdate(payload._id, payload, { new: true })
			.exec();
	}

	delete(_id: MSchema.Types.ObjectId) {
		return this.adressModel.findByIdAndDelete(_id).exec();
	}
}
