let mongoose = require('mongoose');
let constant = require('../helper/constants');
let Schema = mongoose.Schema;

let categorySchema = new mongoose.Schema({
	name: {
        type: String,
        trim: true,
        uppercase: true,
        required: [true, constant.required.replace('{name}', 'Category name')]
    },
    key_name: {
        type: String,
        trim: true,
        // required: [true, constant.required.replace('{name}', 'Category key')]
    },
    description:{
        type: String,
        trim:true,
        default: ""
    },
    status: {
        type: String,
        default: constant.active
    },
    is_delete:{
        type: Boolean,
        default: false
    },
    created_by:{
        type: Schema.Types.ObjectId,
        ref: 'Employee',
        immutable: true
    },
    updated_by:{
        type: Schema.Types.ObjectId,
        ref: 'Employee'
    },
    deleted_at:{
        type:Date
    },
    deleted_by:{
        type: Schema.Types.ObjectId,
        ref: 'employees'
    },
    tenant_id:{
        type: Schema.Types.ObjectId,
        ref: 'tenants',
        required: [true,  constant.required.replace('{name}', 'Tenant id')]
    }
},{
    timestamps:true
});

let category = mongoose.model('Category', categorySchema);
module.exports = category;