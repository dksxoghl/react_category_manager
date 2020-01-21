import React from 'react';

function SettingItem({ category }) {
    return (
        <div>
            <input name="check" type="checkbox" />
            {category.name}
        </div>
    );
}

export default SettingItem;