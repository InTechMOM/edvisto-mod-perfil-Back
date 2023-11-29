//Esquema de user

/**
 * @openapi 
 *  components:
 *   schemas:
 *    UserSchema:
 *     type: object
 *     properties:
 *      name:
 *        type: string
 *      lastName:
 *        type: string
 *      birthdayDate:
 *        type: date
 *      email:
 *        type: string
 *      password:
 *        type: string
 *      password2:
 *        type: string
 *      securityQuestion:
 *        type: string
 *      securityResponse:
 *        type: string
 *      rol:
 *        type: string
 *      acceptedTerms:
 *        type: boolean
 *      course:
 *        type: string
 *     required:
 *      - name
 *      - lastName
 *      - birthdayDate
 *      - course
 *      - country
 *     example:
 *      name: Ana María 
 *      lastName: Moreno
 *      birthdayDate: 26-05-2005
 *      course: QuintoA
 *      country: Colombia
 */

//API PATCH

/**
 * @openapi
 * /api/profiles/{id}:
 *  patch:
 *   summary: The following route updates the profile created by the user.
 *   tags: [UserSchema]
 *   parameters:
 *    - in: path
 *      name: id
 *      schema:
 *        type: string
 *      required: true
 *      description: The id of user
 *   requestBody:
 *    required: true
 *    content:
 *     application/json:
 *      schema:
 *       type: object
 *       $ref: '#/components/schemas/UserSchema'
 *   responses:
 *    200:
 *     description: User Created
 *    400:
 *     description: Bad Request
 *    422:
 *     description: Validation error, wrong date format
 *    500:
 *     description: Unknown error
 */


// API GET

/**
 * @openapi
 * /api/users:
 *  get:
 *   summary: Return all users
 *   tags: [UserSchema]
 *   parameters:
 *    - in: query
 *      name: name
 *      description: Query for name
 *      schema:
 *        type: string
 *    - in: query
 *      name: lastName
 *      description: Query for lastName
 *      schema:
 *        type: string
 *    - in: query
 *      name: email
 *      description: Query for email
 *      schema:
 *        type: string
 *    - in: query
 *      name: birthdayDate
 *      description: Query for birthdayDate
 *      schema:
 *        type: string
 *    - in: query
 *      name: course
 *      description: Query for course
 *      schema:
 *        type: string
 *    - in: query
 *      name: country
 *      description: Query for country
 *      schema:
 *        type: string
 *   responses:
 *    200:
 *     description: All users
 *     content:
 *      application/json:
 *       schema:
 *        type: array
 *        items:
 *         $ref: '#/components/schemas/UserSchema'
 *    400:
 *     description: Something went wrong
 *    404:
 *     description: User Not Found
 *    500:
 *     description: Unknown error 
 */
