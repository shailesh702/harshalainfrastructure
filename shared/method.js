import { Email } from 'meteor/email';
import {Mongo} from 'meteor/mongo';
export const contact = new Mongo.Collection('contact');
Meteor.methods({
  contact : function (name,email,companyname,contactnumber,comment) {
    contact.insert({
      name : name,
      email : email,
      companyname : companyname,
      contactnumber : contactnumber,
      comment : comment,
      createdAt : new Date()
    });
  },
})