import { ValidationError } from '@nestjs/common';
import { UserInputError } from 'apollo-server-express';
import { GraphQLError, GraphQLFormattedError } from 'graphql';

export const gqlErrorFormatter = (error: GraphQLError) => {
	if (error.message === 'VALIDATION_ERROR') {
		const extensions = {
			code: 'VALIDATION_ERROR',
			errors: []
		};

		Object.keys(error.extensions.invalidArgs).forEach(key => {
			const constraints = [];
			Object.keys(error.extensions.invalidArgs[key].constraints).forEach(
				_key => {
					constraints.push(error.extensions.invalidArgs[key].constraints[_key]);
				}
			);
			extensions.errors.push({
				field: error.extensions.invalidArgs[key].property,
				errors: constraints
			});
		});

		const graphQLFormattedError: GraphQLFormattedError = {
			message: 'VALIDATION_ERROR',
			extensions: extensions
		};
		return graphQLFormattedError;
	}
	return error;
};

export const validationExceptionHandler = (errors: ValidationError[]) => {
	return new UserInputError('VALIDATION_ERROR', {
		invalidArgs: errors
	});
};
