"use strict";

/*;
	@module-license:
		The MIT License (MIT)
		@mit-license

		Copyright (@c) 2017 Biyaheroes Developers
		@email: developers@biyaheroes.com

		Permission is hereby granted, free of charge, to any person obtaining a copy
		of this software and associated documentation files (the "Software"), to deal
		in the Software without restriction, including without limitation the rights
		to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
		copies of the Software, and to permit persons to whom the Software is
		furnished to do so, subject to the following conditions:

		The above copyright notice and this permission notice shall be included in all
		copies or substantial portions of the Software.

		THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
		IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
		FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
		AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
		LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
		OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
		SOFTWARE.
	@end-module-license

	@module-configuration:
		{
			"package": "detail",
			"path": "detail/detail.jsx",
			"file": "detail.jsx",
			"module": "detail",
			"author": "Biyaheroes Developers",
			"contributors": [
				"Robot Biyaheroes <robot@biyaheroes.com>",
				"Richeve S. Bebedor <richeve.bebedor@gmail.com>"
			],
			"eMail": "developers@biyaheroes.com",
			"repository": "https://github.com/Biyaheroes/bh-mj-small-detail.git",
			"global": true
		}
	@end-module-configuration

	@module-documentation:
		Biyaheroes MJML Passenger Component.
	@end-module-documentation

	@include:
		{
			"arkount": "arkount",
			"Column": "mjml-column",
			"Component": "react.Component",
			"falzy": "falzy",
			"Issue": "bh-mj-issue"
			"MJMLElement": "mjml-core",
			"parseon": "parseon",
			"protype": "protype",
			"React": "react",
			"Section": "mjml-section",
			"SmallDetail": "bh-mj-small-detail",
			"sxty4": "sxty4",
			"Table": "mjml-table",
			"truly": "truly",
			"wichevr": "wichevr"
		}
	@end-include
*/

import React, { Component } from "react";

import { MJMLElement } from "mjml-core";
import Column from "mjml-column";
import Section from "mjml-section";
import Table from "mjml-table";
import Text from "mjml-text";

import Issue from "bh-mj-issue";
import SmallDetail from "bh-mj-small-detail";

import arkount from "arkount";
import falzy from "falzy";
import parseon from "parseon";
import protype from "protype";
import sxty4 from "sxty4";
import truly from "truly";
import wichevr from "wichevr";

const tagName = "mj-passenger";

const parentTag = [ "mj-container", "mj-wrapper" ];

const endingTag = false;

const defaultMJMLDefinition = {
	"content": "",
	"attributes": {
		"background-color": "white",
		"passenger-data": "",
		"seat-number": "",
		"passenger-name": "",
		"passenger-age": "",
		"passenger-gender": "",
		"passenger-type": "",
		"passenger-id-number": "",
		"passenger-address": "",
		"passenger-note": "",
		"drop-off-location": "",
		"ticket-price": "",
		"discounted-price": "",
		"amount-paid": ""
	},
};

@MJMLElement
class Passenger extends Component {
	render( ){
		const { mjAttribute } = this.props;

		let { passengerData } = this.props;

		if( truly( passengerData ) && protype( passengerData, STRING ) ){
			try{
				passengerData = parseon( sxty4( passengerData ).decode( ) );

			}catch( error ){
				return ( <Issue error={ error }></Issue> )
			}

		}else{
			passengerData = { };
		}

		let {
			seatNumber,
			passengerName,
			passengerAge,
			passengerGender,
			passengerType,
			passengerIDNumber,
			dropOffLocation,
			passengerAddress,
			passengerNote,
			ticketPrice,
			discountedPrice,
			amountPaid
		} = passengerData;

		passengerAge = wichevr( passengerAge, mjAttribute( "passenger-age" ) );
		passengerGender = wichevr( passengerGender, mjAttribute( "passenger-gender" ) );

		passengerGender = ( passengerGender[ 0 ] || "" ).toUpperCase( );

		passengerIDNumber = wichevr( passengerIDNumber, mjAttribute( "passenger-id-number" ) );

		dropOffLocation = wichevr( dropOffLocation, mjAttribute( "drop-off-location" ) );

		passengerAddress = wichevr( passengerAddress, mjAttribute( "passenger-address" ) );

		passengerNote = wichevr( passengerNote, mjAttribute( "passenger-note" ) );

		ticketPrice = wichevr( ticketPrice, mjAttribute( "ticket-price" ) ).toUpperCase( );

		discountedPrice = wichevr( discountedPrice, mjAttribute( "discounted-price" ) ).toUpperCase( );

		amountPaid = wichevr( amountPaid, mjAttribute( "amount-paid" ) ).toUpperCase( );

		return ( <Section
					{ ...this.props }
					padding="0px 0px 10px 0px"
					background-color={ mjAttribute( "background-color" ) }
				>
					<Column
						width="11%"
					>
						<Text
							font-size="30px"
							font-weight="500"
							letter-spacing="0.3px"
							align="left"
							padding="20px 0px 0px 10px"
						>
							{ wichevr( seatNumber, mjAttribute( "seat-number" ) ) }
						</Text>
					</Column>
					<Column
						width="50%"
					>
						<Table
							table-layout="auto"
							width="auto"
							padding="10px 10px 0px 10px"
						>
							<tr>
								<th
									align="left"
									style={{
										"fontSize": "17px",
										"fontWeight": "500",
										"letterSpacing": "0.3px"
									}}
								>
									{ wichevr( passengerName, mjAttribute( "passenger-name" ) ) }
									{
										( truly( passengerAge ) || truly( passengerGender ) )?
											`, ${ passengerAge }${ passengerGender }` : ""
									}
								</th>
							</tr>
							<tr>
								<td
									align="left"
									style={{
										"fontSize": "12px",
										"letterSpacing": "0.3px",
										"textTransform": "uppercase"
									}}
								>
									{ wichevr( passengerType, mjAttribute( "passenger-type" ) ) }
									{ ( truly( passengerIDNumber ) )? ` (${ passengerIDNumber })` : "" }
								</td>
							</tr>
						</Table>
					</Column>
					<SmallDetail
						width="39%"
						padding="10px 10px 0px 10px"
						title="Drop Off Location"
						value={ dropOffLocation }
					>
					</SmallDetail>
					{ ( truly( passengerAddress )?
						<Column
							width="11%"
						>
						</Column> : null ) }

					{ ( truly( passengerAddress )?
						<SmallDetail
							width="89%"
							padding="0px 10px 0px 10px"
							title="Home Address"
							value={ passengerAddress }
						>
						</SmallDetail> : null ) }

					{ ( truly( passengerNote )?
						<Column
							width="11%"
						>
						</Column> : null ) }

					{ ( truly( passengerNote )?
						<SmallDetail
							width="89%"
							padding="0px 10px 0px 10px"
							title="Note"
							value={ passengerNote }
						>
						</SmallDetail> : null ) }

					{ ( ( truly( ticketPrice ) || truly( discountedPrice ) || truly( amountPaid ) )?
						<Column
							width="11%"
						>
						</Column> : null ) }

					{ ( truly( ticketPrice )?
						<SmallDetail
							width="22.25%"
							padding="0px 10px 0px 10px"
							title="Ticket Price"
							value={ ticketPrice }
						>
						</SmallDetail> : null ) }

					{ ( truly( discountedPrice )?
						<SmallDetail
							width="22.25%"
							padding="0px 10px 0px 10px"
							title="Discounted Price"
							value={ discountedPrice }
						>
						</SmallDetail> : null ) }

					{ ( truly( amountPaid )?
						<SmallDetail
							width="22.25%"
							padding="0px 10px 0px 10px"
							title="Amount Paid"
							value={ amountPaid }
						>
						</SmallDetail> : null ) }

					{ ( ( ) => {
						let length = arkount( [ ticketPrice, discountedPrice, amountPaid ] );

						if( !length ){
							return null;
						}

						length = 4 - length;

						let column = [ ];

						while( length-- ){
							column.push( <Column key={ length } width="22.25%"></Column> )
						}

						return column;
					} )( ) }
				</Section> );
	}
}

Passenger.tagName = tagName;
Passenger.parentTag = parentTag;
Passenger.endingTag = endingTag;
Passenger.defaultMJMLDefinition = defaultMJMLDefinition;

export default Passenger;
