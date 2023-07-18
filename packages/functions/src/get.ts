import {Table} from "sst/node/table";
import handler from "@notes/core/handler"
import dynamodb from "@notes/core/dynamodb";

export const main = handler(async(event: any) => {

    const prams = {
        TableName: Table.Notes.tableName,
        // 'Key' defines the partition key and sort key of the item to be retrieved
        Key: {
            userId: "123", // The id of the author
            noteId: event.pathParameters.id, // The id of the note from the path
        },
    };

    const result = await dynamodb.get(prams);

    if(!result.Item){
        throw new Error("Item not found.");
    }

    // Return the retrieved item
    return result.Item;



});