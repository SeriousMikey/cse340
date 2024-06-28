const pool = require("../database/")

// Gets all classification data
async function getClassifications(){
    return await pool.query("SELECT * FROM public.classification ORDER BY classification_name")
}

// Gets all inventory items and classification_name by classification_id
async function getInventoryByClassificationId(classification_id) {
    try {
        const data = await pool.query(
            `SELECT * FROM public.inventory AS i
            JOIN public.classification AS c
            ON i.classification_id = c.classification_id
            WHERE i.classification_id = $1`,
            [classification_id]
        )
        return data.rows
    } catch (error) {
        console.error("getclassificationsbyid error " + error)
    }
}

// Gets a specific inventory item information by inv_id
async function getItemByInvId(inv_id) {
    try {
        const data = await pool.query(
            `SELECT * FROM public.inventory
            WHERE inv_id = $1`,
            [inv_id]
        )
        console.log(data.rows)
        return data.rows
    } catch (error) {
        console.error("getItemByInvId error " + error)
    }
}

module.exports = {getClassifications, getInventoryByClassificationId, getItemByInvId};