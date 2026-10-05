---
id: "en-docs-resources-persons-the-person-object-overview"
title: "The Person Object — Overview"
sourcePath: "docs/resources/persons/the-person-object.mdx"
locale: "en"
category: "resources"
tags:
  - "resources"
sourceAnchor: "Overview"
slug: "/resources/the-person-object"
url: "https://docs.verifik.co/resources/the-person-object"
---

# The Person Object

## Overview

The Person object represents individuals in the facial recognition system. This object contains all the information needed to manage and track people within your Verifik projects.

### Attributes

#### `name`

**Type:** String  
**Required:** Required

Name of the person that you are going to add to the DB.

#### `gender`

**Type:** String  
**Required:** Required

Gender of the person that you are going to add to the DB. Options: `M` (Male) or `F` (Female).

#### `date_of_birth`

**Type:** Object  
**Required:** Required

Date of birth of the person that you are going to add to the DB.

#### `nationality`

**Type:** String  
**Required:** Required

Nationality of the person that you are going to add to the DB.

#### `images`

**Type:** Array of String  
**Required:** Required

Base64-encoded images for facial recognition. Multiple images can be provided for better recognition accuracy.

#### `collections`

**Type:** Array of string (reference id)  
**Required:** Optional

Array of collection IDs related to this person. Collections help organize people into groups.

#### `notes`

**Type:** String  
**Required:** Optional

Additional notes about the person.

#### `client`

**Type:** string (reference id)  
**Required:** Required

Reference to the client who owns this person record.

#### `status`

**Type:** String  
**Required:** Optional

Status of the person record. Can be:

* `active` - Person is active in the system
* `inactive` - Person is inactive
* `pending` - Person record is pending approval

#### `faceEncodings`

**Type:** Array  
**Required:** Optional

Computed face encodings for facial recognition (automatically generated).

#### `createdAt`

**Type:** Date  
**Required:** Required

Timestamp when the person record was created.

#### `updatedAt`

**Type:** Date  
**Required:** Required

Timestamp when the person record was last updated.
