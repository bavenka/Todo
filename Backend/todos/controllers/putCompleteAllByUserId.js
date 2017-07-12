import putCompleteAllByUserId from '../services/putCompleteAllByUserId';

export default function (req, res, next) {
    putCompleteAllByUserId(req.decodedToken.id).then(todos => {
        res.status(202).json(todos);
    }).catch(err => {
        res.status(500).send(err);
    });
};