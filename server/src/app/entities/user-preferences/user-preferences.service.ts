import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Schema as MSchema } from 'mongoose';

import {
	UserPreferences,
	UserPreferencesDocument
} from './user-preferences.model';
import { CreatePrefInput, UpdatePrefInput } from './user-preferences.input';

@Injectable()
export class UserPreferencesService {
	constructor(
		@InjectModel(UserPreferences.name)
		private prefModel: Model<UserPreferencesDocument>
	) {}

	getById(_id: MSchema.Types.ObjectId) {
		return this.prefModel.findById(_id).exec();
	}

	create(payload: CreatePrefInput) {
		const newPref = new this.prefModel(payload);
		return newPref.save();
	}

	update(payload: UpdatePrefInput) {
		return this.prefModel
			.findByIdAndUpdate(payload._id, payload, { new: true })
			.exec();
	}

	delete(_id: MSchema.Types.ObjectId) {
		return this.prefModel.findByIdAndDelete(_id).exec();
	}
}
