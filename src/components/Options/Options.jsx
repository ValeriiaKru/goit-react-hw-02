import css from './Options.module.css';

function Options({ total, update, reset }) {
    return (
        <div className={css.container}>
            <button
                className={css.button}
                onClick={() => update('good')}
                type="button">
            Good
            </button>

            <button
                className={css.button}
                onClick={() => update('neutral')}
                type="button">
            Neutral
            </button>

            <button
                className={css.button}
                onClick={() => update('bad')}
                type="button">
            Bad
            </button>
{total ?(
            <button
                className={css.button}
                onClick={reset}
                type="button">
            Reset
            </button>
            ) : (
            ''
            )}
        </div>
        
    );
}

export default Options;